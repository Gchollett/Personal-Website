import { NextPage } from "next";
import Shelf, { ShelfItem } from "../../components/shelves";
import { AxeGroot, CookieGrogu, DwightSchrute, EdwardElric, Finn, Hancock, JohnWick, JynErso, K2SO, LilGroot, RoyMustang, SpeederMando, T51, kitBull, tbc } from "../../resources/imageData";


const Funko:NextPage = () => {
return(
    <>
    <h1>Funko Pop Collection</h1>
    <p>This is my massive Funko Pop collection.</p>
    <Shelf>
        <ShelfItem src={kitBull}></ShelfItem>
        <ShelfItem src={JohnWick}></ShelfItem>
        <ShelfItem src={DwightSchrute}></ShelfItem>
        <ShelfItem src={Finn}></ShelfItem>
        <ShelfItem src={RoyMustang}></ShelfItem>
        <ShelfItem src={EdwardElric}></ShelfItem>
        <ShelfItem src={CookieGrogu}></ShelfItem>
        <ShelfItem src={SpeederMando}></ShelfItem>
        <ShelfItem src={K2SO}></ShelfItem>
        <ShelfItem src={JynErso}></ShelfItem>
        <ShelfItem src={AxeGroot}></ShelfItem>
        <ShelfItem src={LilGroot}></ShelfItem>
        <ShelfItem src={T51}></ShelfItem>
        <ShelfItem src={Hancock}></ShelfItem>
        <ShelfItem src={tbc}></ShelfItem>
    </Shelf>
    </>
)
}

export default Funko