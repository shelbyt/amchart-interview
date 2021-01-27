import { Button, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    // marginBottom: 12,
  },
  icon: {
    marginRight: 8,
    height: 24,
    width: 24,
    marginBottom: 10,
  },
  amount: {
    marginRight: 6,
    fontWeight: "bold",
    fontSize: 16,
    color: "#0E103C",
  },
  increase: {
    marginTop: 6,
    fontWeight: 500,
    fontSize: 12,
    color: "#28C76F",
  },
  decrease: {},
  time: {
    fontSize: 12,
    color: "#CDCDCD",
  },
  button: {
    marginLeft: "auto",
  },
});

const HeaderButton = withStyles({
  root: {
    color: "#ffffff",
    background: "#28C76F",
    borderRadius: 25,
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 12,
    padding: "6px 3px 6px 3px",

    "&:hover": {
      backgroundColor: "#28C76F",
    },
  },
})(Button);

export interface CardHeaderProps {
  icon: JSX.Element;
  amount: number;
  percentageAmount: number;
  variant: "increase" | "decrease";
  time: string;
  buttonTitle: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  icon,
  amount,
  percentageAmount,
  variant,
  time,
  buttonTitle,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.infoContainer}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.amount}>${amount}</div>
        <div className={classes[variant]}>{percentageAmount}%</div>
        <div className={classes.button}>
          <HeaderButton>{buttonTitle}</HeaderButton>
        </div>
      </div>
      <div className={classes.time}>{time} ago</div>
    </div>
  );
};
