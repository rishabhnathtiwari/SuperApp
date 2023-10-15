import './NewsSection.css';
import React, { useEffect, useState } from 'react';


const NewsSection = () => {

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

          <span className='ReadMore'>
            <a href={news.articles[articleIdx].url} target='_blank' rel='noopener noreferrer'>
              ...Read more ⇨</a></span>
         <h4 className='Nxt_News' onClick={nextNews}>Next News →</h4>

          </p>

        </div> ) : (
        <p className='Nws_Err'>Sorry! Access to fetch News from API has been blocked due to CORS policy restrictions.</p>
      )}
      

      
    </div>
  )
}

export default NewsSection;
