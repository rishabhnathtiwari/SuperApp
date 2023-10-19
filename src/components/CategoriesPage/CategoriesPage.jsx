import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Drama from '../../imagefolder/drama.png';
import Fantasy from '../../imagefolder/fantasy.png';
import Music from '../../imagefolder/music.png';
import Fiction from '../../imagefolder/fiction.png';
import Western from '../../imagefolder/western.png';
import Thriller from '../../imagefolder/thriller.png';
import Action from '../../imagefolder/action.png';
import Horror from '../../imagefolder/horror.png';
import Romance from '../../imagefolder/romance.png';
import CloseIcon from '@mui/icons-material/Cancel';
import './CategoriesPage.css';



const CategoriesPage = () => {

  const [selectedGenre, setSelectedGenre] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const redirectTo = useNavigate();

  useEffect(() => {
    if (selectedGenre.length >= 3) {
      setErrorMessage('');
    }
  }, [selectedGenre]);

  const deleteItems = (genreName) => {
    setSelectedGenre((prevSelectedGenre) =>
      prevSelectedGenre.filter((genre) => genre !== genreName)
    );
  };
  
  
  const handleNextPageClick = () => {

    if (selectedGenre.length < 3) {

      setErrorMessage('⚠ Choose Atleast 3 categories ');
    } else {
      setErrorMessage('');
      localStorage.setItem('selectedGenre', JSON.stringify(selectedGenre));

      redirectTo("/browsepage")
      
    }
  };

  const cardData = [
    {

      id:1,
      name: "Action",
      color: "#FF5209",
      image: Action
    },
    {
      id:2,
      name: "Drama",
      color: "#D7A4FF",
      image: Drama
    },
     {
      id:3,
      name: "Romance",
      color: "#11B800",
      image: Romance
    },
    {
      id:4,
      name: "Thriller",
      color: "#84C2FF",
      image: Thriller
    },
    {
      id:5,
      name: "Western",
      color: "#912500",
      image: Western
    },
    {
      id:6,
      name: "Horror",
      color: "#7358FF",
      image: Horror
    },
    {
      id:7,
      name: "Fantasy",
      color: " #FF4ADE",
      image: Fantasy
    },
    {
      id:8,
      name: "Music",
      color: "#E61E32",
      image: Music
    },
    {
      id:9,
      name: "Science Fiction",
      color: "#005066",
      image: Fiction
    }
  ]






  return (
    <div className='maincontainer'>

    <div className='LeftCont'>
 
    <h1 id='HeadTitle'>Super App</h1>

    <h1 className='text'>Choose your <br/>entertainment<br />category</h1>

    
    
    
    <div className = 'select'>{selectedGenre.map((genre) => (
          <p className='selected'  style={{ backgroundColor: cardData.find((card) => card.name === genre)?.color }} ><b>{genre} <span className='CancelIcon' onClick={() => deleteItems(genre)}>
           <CloseIcon/>
          </span></b></p>
        ))}</div>
        {errorMessage && <p className='Error'>{errorMessage}</p>}

    </div> 


          
          <div className='RightCont'>
              <div className='card'>
              {cardData.map(card => (
                <Cards key={card.id} data={card}
                setSelectedGenre={setSelectedGenre}
                selectedGenres={selectedGenre} />
              ))}
              </div>
              <button className="NxtBtn1" onClick={handleNextPageClick}><b>Next Page</b></button>
            </div>
          </div>
        )
      }




      const Cards = ({ data, selectedGenre, setSelectedGenre }) => {
        const [clicked, setClicked] = useState(false);

        const handleClick = () => {
          setClicked(!clicked);
        };

        useEffect(() => {
          if (clicked) {
            setSelectedGenre((prevSelectedGenre) => [...prevSelectedGenre, data.name]);
          } else {
            setSelectedGenre((prevSelectedGenre) =>
              prevSelectedGenre.filter((genre) => genre !== data.name)
            );
          }
        }, [clicked]);




  useEffect(() => {
    if (selectedGenre && selectedGenre.includes(data.name)) 
    {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [selectedGenre]);

 
  return (
    <div
      className={`cardContainer ${clicked ? 'clicked' : ''}`}
      style={{ backgroundColor: data.color }}
      onClick={handleClick}
    >
      
      <h2 className='cardTitle'>{data.name}</h2>
      <img className='cardImage' src={data.image} alt={data.name} />
    </div>
  );
}
    
    
    


  




export default CategoriesPage;
