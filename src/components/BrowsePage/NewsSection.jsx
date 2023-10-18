import './NewsSection.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewsSection = () => {

//For Naviagation
  const redirectTo = useNavigate();
    // State variables
    const [news, setNews] = useState('');
    const [articleIdx, setArticleIdx] = useState(0);


     // Fetching news data from API on component mount
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const result = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f0080e4784ae485ba2add0c338c84229");
          const data = await result.json();
          setNews(data);
          console.log(data);
        } catch (error) {
          console.log("Error fetching the news", error);
        }
      };
      fetchNews();
    }, []);


    
  // Function to display next news article
  
    const nextNews = () => {
      if (news && news.articles) {
        const newIdx = (articleIdx + 1) % news.articles.length;

        setArticleIdx(newIdx);
      }
    };


    

   //Function to handle next page click

    const handleNxtPageBtn = () => {
      
      redirectTo('/movies');

    };





  return (
    <div>
  {news && news.articles && news.articles.length > 0 ? (
       <div className='news'>


          <div>
            <img className='News_Image' src={news.articles[articleIdx].urlToImage} alt="NewsArticle" />
            <div className='News_Title'>
              <h2 className='title'>{news.articles[articleIdx].title}</h2><br />
              <p className='date_time'>{news.articles[articleIdx].publishedAt}</p>
            </div>
          </div>

          
          <p className='News_Txt'>{news.articles[articleIdx].description} 

         
         <h3 className='Nxt_News' onClick={nextNews}>Next News →</h3>

          </p>

        </div> ) : (
        <p className='Nws_Err'>Sorry! Access to fetch News from API has been blocked due to CORS policy restrictions.</p>
      )}
      

      <button id="NxtBtn2" onClick={handleNxtPageBtn}><b>Browse</b></button>
      
    </div>
  )
}

export default NewsSection;
