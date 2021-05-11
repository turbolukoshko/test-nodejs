import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const { autor, title, content, picture } = req.body;
      const post = await Post.create({ autor, title, content, picture });
      res.json(post);
    } catch(e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch(e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        res.status(400).json({ message: "Id not found" });
      }
      const post = await Post.findById(id);
      return res.json(post);
    } catch(e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    
  }

  async delete(req, res) {
    
  }
}

export default new PostController();
