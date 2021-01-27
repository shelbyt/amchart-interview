import {
  CardActions,
  Card as MaterialUICard,
  CardContent,
  Button,
  withStyles,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LikeButton, LikeButtonProps } from "../LikeButton/LikeButton";
import { CardFooter } from "./CardFooter";

import { CardHeader, CardHeaderProps } from "./CardHeader";
import { CardTitle, CardTitleProps } from "./CardTitle";
import avatar from "../../assets/icons/avatar.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 241,
    padding: "14px 16px 15px 16px",
    border: "1px solid #E9E9E9",
    borderRadius: 8,
    height: 317,
  },
  avatar: {
    width: 24,
    height: 24,
    marginTop: 21,
  },
});

const ButtonFooter = withStyles({
  root: {
    color: "#3586FF",
    fontSize: 12,
    lineHeight: "17px",
    textTransform: "capitalize",
    fontWeight: 500,
  },
})(Button);

export interface CardProps {
  content: JSX.Element;
  headerProps: CardHeaderProps;
  footerBottomTitle: string;
  likeButtonProps: LikeButtonProps;
  titleProps: CardTitleProps;
  avatar?: string | JSX.Element;
}

export const Card: React.FC<CardProps> = ({
  headerProps,
  footerBottomTitle,
  likeButtonProps,
  titleProps,
  content,
}) => {
  const classes = useStyles();
  return (
    <div>
      <MaterialUICard className={classes.root} variant="outlined">
        <CardHeader
          icon={headerProps.icon}
          amount={headerProps.amount}
          variant={headerProps.variant}
          percentageAmount={headerProps.percentageAmount}
          time={headerProps.time}
          buttonTitle={headerProps.buttonTitle}
        />
        <CardContent style={{ padding: 0 }}>
          {content}
          <CardTitle title={titleProps.title} />
          {/* Replace this with real source of avatar following the prop */}
          <Avatar className={classes.avatar} src={avatar} />
        </CardContent>
        <CardActions style={{ padding: 0 }}>
          <CardFooter
            leftContent={
              <ButtonFooter size="small">{footerBottomTitle}</ButtonFooter>
            }
            rightContent={<LikeButton likes={likeButtonProps.likes} />}
          />
        </CardActions>
      </MaterialUICard>
    </div>
  );
};
