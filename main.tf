provider "aws" {
  region = "us-east-1" # Replace with your desired region
}

resource "aws_s3_bucket" "web_bucket" {
  bucket = "sre-challenge-2023" # Replace with your desired bucket name
  #   acl    = "public-read"
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontAccess",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.web_identity.id}"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::sre-challenge-2023/*"
    }
  ]
}
EOF
  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "index_html" {
  bucket = aws_s3_bucket.web_bucket.id
  key    = "index.html"
  source = "index.html" # Replace with the path to your local index.html file

  content_type = "text/html"
}
resource "aws_acm_certificate" "tmmlab_certificate" {
  domain_name       = "tmmlab.net" # Replace with your domain name
  validation_method = "DNS"

  subject_alternative_names = [
    "*.tmmlab.net", # Replace with additional domain or subdomain names
  ]

  tags = {
    Name = "Example Certificate"
  }
}

resource "aws_route53_zone" "tmmlab_zone" {
  name = "tmmlab.net"
}
resource "aws_route53_record" "tmmlab_dns_record" {
  zone_id = aws_route53_zone.tmmlab_zone.zone_id
  name    = "tmmlab.net" # Replace with your desired DNS name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.web_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.web_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "tmmlab_sub_dns_record" {
  zone_id = aws_route53_zone.tmmlab_zone.zone_id
  name    = "test.tmmlab.net" # Replace with your desired DNS name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.web_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.web_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
resource "aws_route53_record" "example_certificate_validation" {
  for_each = {
    for dvo in aws_acm_certificate.tmmlab_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 300
  type            = each.value.type
  zone_id         = aws_route53_zone.tmmlab_zone.zone_id
}

resource "aws_acm_certificate_validation" "example" {
  certificate_arn         = aws_acm_certificate.tmmlab_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.example_certificate_validation : record.fqdn]
}
resource "aws_acm_certificate_validation" "example_certificate_validation" {
  certificate_arn         = aws_acm_certificate.tmmlab_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.example_certificate_validation : record.fqdn]
  # vaxlidation_record_fqdns = [aws_route53_record.example_certificate_validation.fqdn]
}

resource "aws_cloudfront_distribution" "web_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2"
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.web_bucket.bucket_domain_name
    origin_id   = aws_s3_bucket.web_bucket.id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.web_identity.cloudfront_access_identity_path
    }
  }
  aliases = [ "test.tmmlab.net"]
  default_cache_behavior {
    target_origin_id = aws_s3_bucket.web_bucket.id
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.tmmlab_certificate.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_identity" "web_identity" {
  comment = "Access Identity for CloudFront"
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.web_distribution.domain_name
}
