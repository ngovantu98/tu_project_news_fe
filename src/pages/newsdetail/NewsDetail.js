import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,

} from "reactstrap";
import { selectTrips } from "../../redux/selectors/TripSelector ";
import { getListTripAction } from "../../redux/actions/TripActions";
import { connect } from "react-redux";
import NewsDetailApi from "../../api/NewsDetailApi";
import * as Icon from "react-feather";
import { useLocation } from "react-router-dom";
import renderHTML from 'react-render-html';

const NewsDetail = () => {
  const location = useLocation();
  const [newsDetailList, setNewsDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const news = location.state.newsId;
    const getNewsDetailById = async () => {
      console.log(news);
      const response = await NewsDetailApi.getByID(news);
      setNewsDetail(response);
      setLoading(false);
    }
    getNewsDetailById();
  }, [setNewsDetail]);
  
  if (loading) return <p>Đang tải sản phẩm...</p>;
  console.log(newsDetailList);



  return (
    <Container>
      <div>
    <h1>{props.newsDetails.name}</h1>
    <h3>{props.newsDetails.title}</h3>
   
    {/* <button onClick={() => window.history.back()}>Quay lại</button> */}
  </div>

    </Container>
    
    
    
  );
};


export default NewsDetail;

