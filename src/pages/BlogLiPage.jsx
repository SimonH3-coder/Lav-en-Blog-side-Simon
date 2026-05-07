
import { useState} from "react"
import { useGraphQuery } from "../hooks/usequerry";
import { allBlog } from "../queries/allBlog";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";




export function BlogLiPage() {
    const [QuerySearch, setQuerySearch] = useState("");
    const { data, error, isLoading } = useGraphQuery(allBlog)
  const blogs = data?.eagles ?? [];

  const filteredBlogs = blogs.filter(blog =>
    blog.header.toLowerCase().includes(QuerySearch.toLowerCase())
  );

    if (isLoading) {
        return (
            <Container maxWidth="lg" sx={{py: 8, display: "flex", justifyContent: "center"}}>
                <CircularProgress />
            </Container>
        )
    }
    if (error) {
        return (

                <Container maxWidth="lg" sx={{py: 8}}>
                    <Alert severity="error"> Der sket desværre en fejl ved at hente blogindlæg med ørne </Alert>
                </Container>
            )
        }
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    py: {xs: 4, md:8 },
                    background: "linear-gradient(180deg, #f7f7fb 0%, green 100%)"
                }}
                >
            <Container maxWidth="lg">
                <Stack spacing={2} sx={{ mb: 5}}>
                <Chip label="Blog" color="primary" sx={{ width: "fit-content" }} />
                <Typography variant="h3" component="h1" fontWeight={800}>
                    Seneste faktaer om ørne 
                </Typography>
                <Typography variant="body1" color="text.secondary" maxWidth={700}>
                    Oversigt over sjove ting om ørne med billeder og tekst
                </Typography>
                </Stack>

                <TextField
                fullWidth
                placeholder= "Søg efter blog og faktaer om ørne"
                value={QuerySearch}
                onChange={(e) => setQuerySearch(e.target.value)}
                sx={{ mb: 4}}
                variant="outlined"
                />
                {filteredBlogs.length === 0 ? (
                    <Alert severity="information">Der blev ikke fundet nogen bloks med ørne: "{QuerySearch}"
                    </Alert>
                ) : (
                
                <Grid container spacing={3}>
                    {filteredBlogs.map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog.id}>
                            <Card
                            elevation={4}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boderRadius: 4,
                                overflow: "hidden",
                                trasition: "transform 0.2s ease, box-shadow 0.3 ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: 8
                                }  
                            }}>
                            {blog.image?.url && (
                                <CardMedia
                                component="img"
                                image={blog.image.url}
                                alt={blog.header}
                                sx={{ height: 180, objectFit: "cover" 

                                }}
                            />

                            )}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="overline" color="primary">
                                    {blog.datoerTidOgBilleder}
                                </Typography>
                                <Typography variant="h5" component="h2" fontWeight={700} sx={{ mt: 1, mb: 1}}>
                                    {blog.header}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2}}>
                                    {blog.indholdTekst}
                                </Typography>

                                <Divider sx={{ my: 2}} />
                                <Typography variant="body2" sx={{ mb: 1}}>
                                    {blog.content}
                                </Typography>
                                <Chip label={blog.footer} size="small" variant="outlined"/>
                            </CardContent>

                            </Card>
                    
                </Grid>
                    ))}
                </Grid>
                )}
            </Container>


            </Box>
        )
    }

    




