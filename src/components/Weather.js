import {Box, Card, CardContent, List, ListItem, ListItemText, Typography} from "@mui/material";
import {format} from "date-fns";
import React from "react";

function Weather(props) {
    let arr = [];
    let gridTemplate = '';

    switch (props.tab) {
        case 0: {
            arr.push(props.data.current);
            gridTemplate = '1fr';
            break;
        }
        case 1: {
            arr.push(props.data.hourly[23], props.data.hourly[47]);
            gridTemplate = '1fr 1fr';
            break;
        }
        case 2: {
            arr.push(...props.data.daily);
            gridTemplate = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            break;
        }
        default: {
            break;
        }
    }
    return (
        <>
            <Box display='grid' gridTemplateColumns={gridTemplate}>
                {props.tab === 0 && arr.map(item => (<WeatherCardFull {...item} />))}
                {props.tab === 1 && arr.map(item => (<WeatherCardExtended {...item} />))}
                {props.tab === 2 && arr.map(item => (<WeatherCard {...item} />))}
            </Box>
        </>
    );
}

function WeatherCard(props) {

    const temp = props.temp instanceof Object ? props.temp.day : props.temp;
    const feels_like = props.feels_like instanceof Object ? props.feels_like.day : props.feels_like
    const dt = new Date();
    dt.setTime(Number(props.dt) * 1000);

    return (
        <Box width={130}>
            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemText><Typography variant='h5'
                                                      textAlign='center'>{format(dt, 'dd.MM')}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography
                                textAlign='center'>Т, С   {Math.round(Number(temp) - 273.15)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography
                                textAlign='center'>Ощущ. как   {Math.round(Number(feels_like) - 273.15)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography textAlign='center'>Влаж.   {Math.round(Number(props.humidity))}%</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography
                                textAlign='center'>Давл.   {Math.round(Number(props.pressure) / 1.333)}</Typography></ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

function WeatherCardExtended(props) {

    const temp = props.temp instanceof Object ? props.temp.day : props.temp;
    const feels_like = props.feels_like instanceof Object ? props.feels_like.day : props.feels_like
    const weather = props.weather[0].description

    const dt = new Date();
    dt.setTime(Number(props.dt) * 1000);
    console.log(Number(props.dt));
    return (
        <Box margin={2}>
            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemText><Typography variant='h5'
                                                      textAlign='center'>{format(dt, 'dd.MM')}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Температура, C:</ListItemText>
                            <ListItemText><Typography
                                textAlign='end'
                                paddingRight={4}>{Math.round(Number(temp) - 273.15)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Ощущается как:</Typography></ListItemText>
                            <ListItemText><Typography
                                textAlign='end' paddingRight={4}>{Math.round(Number(feels_like) - 273.15)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Влажность, %:</Typography></ListItemText>
                            <ListItemText><Typography textAlign='end'
                                                      paddingRight={4}>{Math.round(Number(props.humidity))}%</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Давление, мм.рт.ст.:</Typography></ListItemText>
                            <ListItemText><Typography
                                textAlign='end'
                                paddingRight={4}>{Math.round(Number(props.pressure) / 1.333)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Погода:</Typography></ListItemText>
                            <ListItemText><Typography
                                textAlign='end' paddingRight={4}>{weather}</Typography></ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

function WeatherCardFull(props) {

    const temp = props.temp instanceof Object ? props.temp.day : props.temp;
    const feels_like = props.feels_like instanceof Object ? props.feels_like.day : props.feels_like
    const weather = props.weather[0].description

    const dt = new Date();
    dt.setTime(Number(props.dt) * 1000);
    console.log(Number(props.dt));
    return (
        <Box margin='10px 120px'>
            <Card>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemText><Typography variant='h5'
                                                      textAlign='center'>{format(dt, 'dd.MM')}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Температура, C:</ListItemText>
                            <ListItemText><Typography
                                textAlign='end'
                                paddingRight={4}>{Math.round(Number(temp) - 273.15)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Ощущуется как:</Typography></ListItemText>
                            <ListItemText><Typography
                                textAlign='end' paddingRight={4}>{Math.round(Number(feels_like) - 273.15)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Влажность, %:</Typography></ListItemText>
                            <ListItemText><Typography textAlign='end'
                                                      paddingRight={4}>{Math.round(Number(props.humidity))}%</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Давление, мм.рт.ст.:</Typography></ListItemText>
                            <ListItemText><Typography
                                textAlign='end'
                                paddingRight={4}>{Math.round(Number(props.pressure) / 1.333)}</Typography></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Typography>Погода:</Typography></ListItemText>
                            <ListItemText><Typography
                                textAlign='end' paddingRight={4}>{weather}</Typography></ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Weather;