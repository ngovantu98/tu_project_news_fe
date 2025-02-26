import React,{useEffect, useState,} from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  

} from "reactstrap";

import NewsApi from "../../api/NewsApi";
import CategoryApi from "../../api/CategoryApi";


const  News = (props) => {

  const [newsList, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);


  

  useEffect(() => {
    const getAllNews = async () => {
      const response = await NewsApi.getAll();
      setNews(response);
      setLoading(false);
    }
    const getAllCategorys = async () => {
      const response = await CategoryApi.getAll();
      setCategories(response);
      setLoading(false);
    }
    getAllNews();
    getAllCategorys();
  }, []);

  if (loading) return <p>Đang tải sản phẩm...</p>;
  console.log(newsList);
  console.log(categories);

  
  


  //gọi đến chi tiết news

    const goToNewsDetail = (news) => {
      props.history.push({
        pathname: '/newsDetails',
        state: {news: news} // your data array of objects {key: value}
      })
    }
 
   
  


  return (
    <Container fluid className="p-0">
      <h1 className="tieude">Tin tức</h1>
      <br></br>
      <h2 className="text-2xl font-semibold">Danh Mục</h2>
      <div className="news-category">
      {loading ? (
        <p>Đang tải danh mục...</p>
      ) : (
        
        categories.map((category) => (
          <div key={category.id} className="category-item">
            {category.name}
          </div>
        ))
      )}
    </div>
    <h2 className="text-2xl font-semibold">Tin tức nổi bật</h2>
      <br></br>
      <Row>
      
        <br></br>
        {newsList && newsList.map((news, key) => {
          const { id,name, imageUrl, date } = news;
          return (
            <Col md="12" lg="4">
              {/* <h3>{news.id}</h3>
              <h3>{news.name}</h3> */}
              <Card>
                <img className="tourImage" alt="" src={imageUrl} />
                <CardHeader>
                  
                  <CardTitle tag="h5" className="name">
                    {name}
                  </CardTitle>
                
                </CardHeader>
                <CardBody>

                  <h1 className="time">{date}</h1>
                  <br></br>  
    
                  <Button onClick={() => goToNewsDetail(id)}>
                      Xem chi tiết
                    </Button>
                </CardBody>
          
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  )
};

export default News;