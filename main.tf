provider "aws" {
  region = "us-east-1"  # Replace with your desired region
}

resource "aws_s3_bucket" "web_bucket" {
  bucket = "sre-challenge-2023"  # Replace with your desired bucket name
#   acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "index_html" {
  bucket = aws_s3_bucket.web_bucket.id
  key    = "index.html"
  source = "index.html"  # Replace with the path to your local index.html file

  content_type = "text/html"
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

  default_cache_behavior {
    target_origin_id     = aws_s3_bucket.web_bucket.id
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
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_identity" "web_identity" {
  comment = "Access Identity for CloudFront"
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.web_distribution.domain_name
}
