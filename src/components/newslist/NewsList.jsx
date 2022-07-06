import React, { useEffect, useState } from 'react';
import CircularIndeterminate from '../../utils/loader/loader';
import NewsCard from '../newscard/Newscard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const NewsList = ({cat}) => {

  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();
  const [ccat, setcat] = useState(cat);

  useEffect(() => {
    
    setcat(cat);
  
    
  }, [cat])
  

  useEffect(() => {
    
    (async function() {
      
        setLoading(true);
     
      const res = await fetch(`https://inshortsapi.vercel.app/news?category=${cat}`);

      const data = await res.json();

      setNews(data.data);
      setLoading(false);
    })();
    
  
   
  }, [ccat])

    

    if(isLoading){
      return (
        <CircularIndeterminate/>
      )
    }

    const newsarr = news.map(el=>{
      return <Grid item key={el.title} ><NewsCard author={el.author} content={el.content} date={el.date} imageUrl={el.imageUrl} readMoreUrl={el.readMoreUrl} time={el.time} title={el.title} url={el.url} /></Grid>
    })
    
  return (
    <div style={{marginTop: '70px'}}>
      <Grid container className={classes.root} spacing={3} alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
        {newsarr}
        </Grid>
        </div>
  )
}

export default NewsList;