import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      // check if the name is tags, if so, split the string into an array
      [name]: name === "tags" ? value.split(",") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit form data to database
    fetch("http://localhost:4040/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // clear form
        setFormData({
          title: "",
          content: "",
          image: "",
          tags: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContent">
          <Form.Label>Post Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post content"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comma separated tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
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
