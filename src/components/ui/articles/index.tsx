import React from 'react';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import CompareArrowsSharpIcon from '@material-ui/icons/CompareArrowsSharp';
import { StylesProvider } from '@material-ui/core/styles';
import DefaultArticle from './defaultArticle';
import DefaultAd from './defaultAd';
import {
  StyledQuntButton,
  StyledContainer,
  StyledOrgButton,
  StyledButtonContainer,
  StyledTextContainer,
} from './styles';

const FilteringButtons: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        <div />
        <StyledButtonContainer>
          <StyledQuntButton>
            <ViewModuleIcon />
            Quantidade
          </StyledQuntButton>
          <StyledOrgButton>
            <CompareArrowsSharpIcon />
            Organização
          </StyledOrgButton>
        </StyledButtonContainer>
        <StyledTextContainer>
          <h4>Title of Something</h4>
          <p>text explaining how something is something of somethings</p>
        </StyledTextContainer>
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
        <DefaultAd />
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
      </StyledContainer>
    </StylesProvider>
  );
};

export default FilteringButtons;
