import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: "24px",
    color: "#0E103C",
    margin: 0,
    marginTop: 9,
    marginBottom: 6,
  },
});

export interface CardTitleProps {
  title: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.root}>{title}</div>;
};
