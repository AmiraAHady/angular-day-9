let express=require('express')
let mongoose=require('mongoose')
let app=express()
var cors = require('cors')
let Movie=require('./model/movies')

mongoose.connect('mongodb+srv://amira:ASDasd123@cluster0.yhxjcxs.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
  console.log('connect to db');
}).catch(()=>{
    console.log('failed to connect to db');
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
//?page=4&user='ahmed'
app.get('/movies',function(req,res,next){
    let currentPage=+req.query.page
    let pagesize=20;
    let selecteeMovies;

    Movie.find().skip(pagesize*(currentPage-1)).limit(pagesize).then((data)=>{
        selecteeMovies=data;
        return Movie.count()
    }).then((count)=>{
        res.send({
            smovies:selecteeMovies,
            maxMovies:count
        })
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/movies/:id',function(req,res,next){
    Movie.findOne({_id:req.params.id}).then(movie=>{
        if(movie){
            res.send(movie);
        }else{
            res.send('no movie with this id')
        }
    })
})

app.post('/addMovie',function(req,res,next){
    console.log(req.body);
    let addMovie=new Movie({
        adult:false,
        backdrop_path:"/rshlQ6LfPRSWFhpGL4s5ZkIPR51.jpg",
        genre_ids:[
           18,
           36,
           10752
        ],
        id:324786,
        original_language:"en",
        original_title:"Hacksaw Ridge",
        overview:req.body.overView,
        popularity:292.837,
        poster_path:req.body.imgPath,
        release_date:"2016-10-07",
        title:req.body.title,
        video:false,
        vote_average:8.2,
        vote_count:11304
    })

    addMovie.save().then(data=>{
        console.log(data);
        console.log('movie Added ');
    }).catch(err=>{
        console.log('Error adding movie');
    })
})


app.listen(3000,function(){
    console.log('app is ready');
})