
resource "aws_cognito_user_pool" "liberiamed" {
  name = "liberiamed-user-pool"
  # Add other user pool configurations as needed
}

resource "aws_cognito_user_pool_client" "liberiamed" {
  name         = "liberiamed-user-pool-client"
  user_pool_id = aws_cognito_user_pool.liberiamed.id
  # Add other user pool client configurations as needed
}
