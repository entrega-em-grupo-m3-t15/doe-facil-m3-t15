import styled from 'styled-components';
import wallpaperLogin from '../../img/wallpaperLogin.jpg'

export const StylePageLogin = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    h1{
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        width: 80%;
        height: 50%;
    }

    main{
        display: flex;
        flex-direction: column;

        height: 90%;
    }

    .box_form{

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        background: url(${wallpaperLogin}) ;
    }

    .box_form > img{
        height: 100%;
        width: 100%;
    }
    
    .wallpaper{
        display: none;
   }

   @media (min-width: 659px) {

        main{
            width: 100%;
            height: 80%;
            flex-direction: row;
            
        }   
        
        h1{
            font-size: 2.8rem;
        }

        .wallpaper{
            display: block;
        }

        .wallpaper > img{
            max-height: 85vh;
            width: 750px;
        }

        .box_form{
            justify-content: center;
            align-items: center;
            background: none;
        }
    }


`

   
   
    
