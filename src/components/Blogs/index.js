import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const blogData = [
  {
    id: 1,
    title: 'Blog Article 1',
    content: 'This is the content of the first blog article.',
  },
  {
    id: 2,
    title: 'Blog Article 2',
    content: 'This is the content of the second blog article.',
  },
  {
    id: 3,
    title: 'Blog Article 3',
    content: 'This is the content of the third blog article.',
  },
];

const Blogs = () => {
  return (
    <Grid container spacing={2}>
      {blogData.map((blog) => (
        <Grid item key={blog.id} xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {blog.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
