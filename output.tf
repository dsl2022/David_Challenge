output "neighbor_certificates_domain_validation_options" {
  value = aws_acm_certificate.tmmlab_certificate.domain_validation_options
}