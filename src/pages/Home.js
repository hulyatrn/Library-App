import BookForm from "../component/BookForm";
import BookList from "../component/BookList";
import { useState,useEffect } from "react";
import {useCollection} from '../hooks/useCollection';
import { useAuthContext } from "../hooks/useAuthContext";


export default function Home() {

    const {user}=useAuthContext();


    const {documets:books}=useCollection('books',["uid","==",user.uid]);

    // const [books,setBooks]= useState(null)

    // useEffect(()=>{
    //     const ref=collection(db,'books');

    //     getDocs(ref)
    //     .then((snap)=>{
    //         //console.log(snap);
    //         let result=[];
    //         snap.forEach(doc=>{
    //             //console.log(doc.data());
    //           result.push({id:doc.id,...doc.data()})  
    //         })

    //         setBooks(result);
    //     })

    // },[])


    return(
        <div className="App">
            {books && <BookList books={books} />}
            <BookForm/>
        </div>
    );
}