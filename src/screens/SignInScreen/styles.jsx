import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center; 
`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;

export const CustomButtom = styled.TouchableOpacity`
    height: 60px;
    background-color: #E51300;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtomText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageText = styled.Text`
    font-size: 16px;
    color: #E51300;
`;

export const SignMessageTextBold = styled.Text`
    font-size: 16px;
    color: #E51300;
    font-weight: bold;
    margin-left: 5px;
`;