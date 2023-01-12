import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponent, students, topCars} from "./components/NewComponent";
import {Button} from "./components/Button";
import {NewState} from "./components/NewState";
import {BankFilter} from "./components/BankFilter";
// import {BankFilter} from "./components/BankFilter";


function App() {

    const Button1Foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button3Foo = () => {
        console.log("I am stupid button");
    }

    return (
        <>
            <Header title={"New Header"}/>
            <Body title={"New Body"}/>
            <Footer title={"New Footer"}/>
            <NewComponent topCars={topCars}/>
            <Button name={"My channel 1"} callback={()=> Button1Foo("I am Vasya")}/>
            <Button name={"My channel 2"} callback={()=> Button2Foo("I am Ivan")}/>
            <Button name={"My channel 3"} callback={Button3Foo}/>
            <NewState/>
            <BankFilter/>
            </>
        )
}

export default App;
