
resource "aws_appsync_graphql_api" "liberiamed" {
  name                = "liberiamed-appsync-api"
  authentication_type = "AMAZON_COGNITO_USER_POOLS"
  user_pool_config {
    user_pool_id        = aws_cognito_user_pool.liberiamed.id
    app_id_client_regex = aws_cognito_user_pool_client.liberiamed.id
    default_action      = "ALLOW"
  }
  # Add other AppSync API configurations as needed
  schema {
    definition = file("../${path.module}/schema/schema.graphql")
  }
}
