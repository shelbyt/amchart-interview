import { Button, makeStyles, withStyles } from "@material-ui/core";
import LikeIcon from "../../assets/icons/like.png";

const useStyles = makeStyles({
  likeIcon: {
    width: 16,
    height: 16,
  },
});

const CustomButton = withStyles({
  root: {
    border: "1px solid #E9E9E9",
    borderRadius: 50,
    background: "transparent",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "17px",
    color: "#CDCDCD",
  },
})(Button);

export interface LikeButtonProps {
  likes: number;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ likes }) => {
  const classes = useStyles();
  return (
    <CustomButton
      endIcon={<img src={LikeIcon} alt="like" className={classes.likeIcon} />}
    >
      {likes}
    </CustomButton>
  );
};
