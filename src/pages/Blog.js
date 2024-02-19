import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dumy } from "../Dumy_info/info";
import Loading from "../Components/Loading";
const Blog = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [user, setuser] = React.useState({});
  useEffect(() => {
    setLoading(true);
    async function getUser() {
      try {
        const filteredData = dumy.filter((item) => item.id === id);
        setuser(filteredData[0] || {});
        console.log(filteredData);
      } catch (Error) {
        console.log(Error);
      }
    }
    getUser();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }
  const { image, company } = user;
  console.log(company);
  return (
    <div className="blog">
      <div className="info">
        <div className="blog_image">
          <img src={image} alt="" />
        </div>
        <div className="blog_info">
          {" "}
          <h1>{company}</h1>
        </div>
      </div>
      <div className="posts"></div>
    </div>
  );
};

export default Blog;
