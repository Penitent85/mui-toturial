import React from "react";
import Typography from "@mui/material/Typography";
import MuiButtonGroub from "./components/aaaaaaaaa";
import { ThemeContextProvider } from "./ThemeContext";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Paper,
  Button,
  useTheme,
} from "@mui/material";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <div style={{ margin: 22 }}>
      <h1 style={{ marginBottom: 40 }}>Mui DarkMode</h1>
      <ThemeContextProvider>
        <Container maxWidth="lg">
          <Paper sx={{ p: 2 }}>
            <Box height={600} p={4}>
              <ThemeSwitcher />
              <Typography variant="h1">Header</Typography>
              <Card>
                <CardHeader title="Card Header" />
                <CardContent>
                  <Typography variant="h2">Card Content</Typography>
                </CardContent>
              </Card>
              <Divider sx={{ my: 5 }} />
              <Chip label="Chip" color="info" />
              <Button variant="contained" color="secondary">
                Click me
              </Button>
              <CustomComponent />
            </Box>
          </Paper>
        </Container>
      </ThemeContextProvider>
    </div>
  );
};

export default App;

const CustomComponent = () => {
  const theme = useTheme();
  return (
    <div
    style={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
    }}
    >
      <h1>Custom Component</h1>
    </div>
  );
};
