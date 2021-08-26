import React from "react";
import data from "../data.json";

class Article extends React.Component  {
  constructor(props) {
    super();
    this.state = {
      article: null
    }
  }
  componentDidMount() {
    let slug = this.props.match.params.slug;
    let article = data.reduce((acc, cv) => {
      if(cv.slug.includes(slug)) {
        acc = cv;
      }
      return acc 
    }, {});
    // console.log(article, "selected Article");
    this.setState({
      article : article
    })
  }

  render(){
    // let slug = this.props.match.params.slug;
    // console.log(this.props, "from Article");
    if(!this.state.article) {
     return (
      <main className="w-2/3 border-2 h-screen">      
     <h2>No Article found</h2>
     </main>
     )   
    } else {
      return (
      <main className="w-2/3 border-2 h-screen">

        <div className="m-5">
        <h1 className="text-2xl font-bold">{this.state.article.title}</h1>
        <p>Author: {this.state.article.author}</p>
        </div>  
        </main>
      )
    }

  }

}
export default Article;