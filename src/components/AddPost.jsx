import { Form, Button, Container } from "react-bootstrap";

const AddPost = () => {
  const handleSubmit = (e) => { 
    e.preventDefault();
    const post = {
      title: e.target.title.value,
      content: e.target.content.value,
      image: e.target.image.value,
      tags: e.target.tags.value.split(','),
    };
    console.log(post);
  };

  return (
    <Container>
      <h1>Add New Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContent">
          <Form.Label>Post Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post content"
            name="content"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post image URL"
            name="image"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comma separated tags"
            name="tags"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddPost;
