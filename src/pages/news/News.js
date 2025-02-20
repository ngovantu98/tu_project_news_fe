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


const  News = (props) => {
  const [newsList, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllNews = async () => {
      const response = await NewsApi.getAll();
      setNews(response);
      setLoading(false);
    }
    getAllNews();

  }, []);

  if (loading) return <p>Đang tải sản phẩm...</p>;
  console.log(newsList);

  //gọi đến chi tiết news

    const goToNewsDetail = (newsId) => {
      props.history.push({
        pathname: '/newsDetails',
        state: { newsId: newsId },
      });
    };
 
   
  


  return (
    <Container fluid className="p-0">
      <h1 className="tieude">Tin tức nổi bật trong ngày</h1>
      <br></br>
      <Row>
        <h1>aaaaaaaaaa</h1>
        {newsList && newsList.map((news, key) => {
          const { id,name, imageUrl, date } = news;
          return (
            <Col md="12" lg="4">
              <h3>{news.id}</h3>
              <h3>{news.name}</h3>
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