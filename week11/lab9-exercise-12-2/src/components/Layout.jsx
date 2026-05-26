import { MainNavigation } from './MainNavigation';
import  Welcome  from '../pages/Welcome';
import { Link, Outlet } from 'react-router-dom';
import Products from '../pages/Products';



export default function Layout(){
    return(
        <>
            <MainNavigation />
            <p>Please explore our products or share this site with others</p>
            <Outlet />
        </>
        
    )
}
