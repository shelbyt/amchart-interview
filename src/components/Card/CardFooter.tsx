import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: 28,
  },
});

export interface CardFooterProps {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  leftContent,
  rightContent,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  );
};
