import styled from 'styled-components';

export const NavigationBar = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 40px;
    align-items: center;
    background: rgba( 168, 172, 184, 0.65 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export const NavigationLink = styled.li `
    height: 100%;
    display: inline-block;
    margin-left: 30px;
    align-items: center;
    list-style: none;
    &:hover {
      transform: scale(1.2);
    }
    
`
export const Main = styled.main `
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(221,221,221);
    
`

export const TodoContainer = styled.div`
    width:  600px;
    max-height: calc(100vh - 100px);
    margin: 20px auto;
    
    background: rgba( 244, 135, 52, 0.45 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const TodoItem = styled.li`
    width:  100%;
    list-style: none;
    padding: 10px;
    font-weight: 400;
    font-size: 18px;
    border-bottom: 1px solid rgb(153,159,173);
    display: flex;
`

export const TodoUl = styled.ul`
    width:  100%;
    max-height: calc(100vh - 100px);
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
`

export const NewInput = styled.input `
    width: 100%;
    background-color: rgb(221,221,221);
    border: none;
    border-radius: 4px;
    padding: 8px;
`
export const InputContainer = styled.div `
    width: 100%;
    max-height: 60px;
    background-color: rgb(63,83,127);
    padding: 15px;
    display: flex;
    box-sizing: border-box;
`
export const AddTodoBtn = styled.button `
    border: none;
    border-radius: 8px;
    width: 50px;
    padding: 6px;
    margin-left: 15px;
    text-transform: uppercase;
    background-color: rgb(153,159,173);
    color: rgb(221,221,221);
    text-align: center;
    vertical-align: middle;
    font-weight: 700;
    &:hover {
        background-color: rgb(244,135,52);
        
        transform: scale(1.1);
    }
`

export const DeleteBtn = styled.span `
    color: rgb(63,83,127);
    align-self: flex-end;
    &:hover {
        color: rgb(244,135,52);
    }
`