import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1">text for h1</Typography>
      <Typography variant="h2">text for h2</Typography>
      <Typography variant="h3">text for h3</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        text for h4
      </Typography>
      <Typography variant="h5">text for h5</Typography>
      <Typography variant="h6">text for h6</Typography>
      <Typography variant="subtitle1">text for subtitle1</Typography>
      <Typography variant="subtitle2">text for subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nisi
        illum ut enim quos tempore, veritatis recusandae delectus veniam
        doloribus fuga dicta magni harum qui necessitatibus mollitia cupiditate
        ullam. Vel?
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        ipsam blanditiis deserunt, dicta magnam eum necessitatibus saepe labore
        aut corrupti quia porro tempore neque nostrum fugit ex vitae? Sit,
        commodi?
      </Typography>
    </>
  );
};
