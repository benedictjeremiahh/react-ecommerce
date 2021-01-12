import React from "react";
import { withRouter } from "react-router-dom";
import {
	BackgroundImage,
	MenuItemContainer,
	Content,
	MenuItemTitle,
	MenuItemSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<MenuItemContainer
			large={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<BackgroundImage image={imageUrl} />
			<Content>
				<MenuItemTitle>{title}</MenuItemTitle>
				<MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
			</Content>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
