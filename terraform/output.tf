output "neighbor_certificates_domain_validation_options" {
  value = aws_acm_certificate.neighborly_certificate.domain_validation_options
}

output "upload_path" {
  value = local.upload_directory
}
