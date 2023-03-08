import styled from 'styled-components';

export const StyleHeader = styled.header`
    width: 100%;
    height: 25vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 1.5rem ;

    border-bottom: solid 2px var(--Color-primary);

    .container{
        min-width: 100%;
        height: 80%;

        padding: .5rem .8rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1.5rem;

    }
    
    .logo{
        display: flex;
        align-items: center;
    }

    .logo > img{
        
        width: 250px
    
    }

    div > nav{
        display: flex;
        justify-content: center;
        gap: .7rem;
    }

    a{
        padding: .5rem;

        width: 125px;

        font-size: .75rem;
        font-weight: 500;

        background-color: var(--Color-primary);
        color: var(--grey-0);

        border-radius: 10px;
        border: var(--grey-0);

        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    
    button{

        border: 1px solid var(--Color-primary);
        border-radius: 10px;

        background-color: var(--grey-0);
        color: var(--Color-primary);

        width: 110px;

        font-weight: 600;

    }

    @media (min-width: 376px) {

        height: 30%;

        .logo>img{
            width: 270px
        }

   }

   @media (min-width: 659px) {

    width: 100%;
    height: 15%;
    padding-bottom: 1rem;


    .container{

        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 2.5rem;
    }

    div > nav{

        width: 100%;

        display: flex;
        justify-content: end;

        gap: 1.5rem;

    }

    .logo{

        display: flex;
        align-items: flex-start;
    }

    .logo>img{
        width: 185px;
    }

    a{
        padding: .8rem;

        font-size: 1rem;
    }
}

`