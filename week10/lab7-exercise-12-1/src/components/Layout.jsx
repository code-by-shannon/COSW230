import { MainNavigation } from './MainNavigation';
import  Welcome  from '../pages/Welcome';
import { Link } from 'react-router-dom';
import Products from '../pages/Products';


export default function Layout( {children} ){
    return(
        <>
            <MainNavigation />
            <p>Please explore our products or share this site with others</p>
            {children}
        </>
        
    )
}
