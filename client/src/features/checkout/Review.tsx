import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { currencyFormat } from "../../lib/util";
import { ConfirmationToken } from "@stripe/stripe-js";
import { useBasket } from "../../lib/hooks/useBasket";

type Props = {
    confimationToken: ConfirmationToken | null;
}

export default function Review({confimationToken}: Props) {
    const {basket} = useBasket();
    
    const addressString = () => {
        if (!confimationToken?.shipping) return '';
        const {name, address} = confimationToken.shipping;
        return `${name}, ${address?.line1}, ${address?.city}, 
            ${address?.state}, ${address?.postal_code}, ${address?.country}`
    }

    const paymentString = () => {
        if (!confimationToken?.payment_method_preview.card) return '';
        const {card} = confimationToken.payment_method_preview;

        return `${card.brand.toUpperCase()}, **** **** **** ${card.last4}, 
            Exp: ${card.exp_month}/${card.exp_year}`
    }

    return (
        <div>
            <Box mt={4} width='100%'>
                <Typography variant="h6" fontWeight='bold'>
                    Billing & delivery information
                </Typography>
                <dl>
                    <Typography component='dt' fontWeight='medium'>
                        Shipping Address
                    </Typography>
                    <Typography component='dd' mt={1} fontWeight='textSceondary'>
                        {addressString()}
                    </Typography>

                    <Typography component='dt' fontWeight='medium'>
                        Shipping Address
                    </Typography>
                    <Typography component='dd' mt={1} fontWeight='textSceondary'>
                        {paymentString()}
                    </Typography>
                </dl>
            </Box>

            <Box mt={6} mx='auto'>
                <Divider />
                <TableContainer>
                    <Table>
                        <TableBody>
                            {basket?.items.map((item) => (
                                <TableRow key={item.productId} 
                                    sx={{borderBottom: '1px solid rgba(224, 224, 224, 1'}}>
                                    <TableCell sx={{py: 4}}>
                                        <Box display='flex' gap={3} alignItems='center'>
                                            <img src={item.pictureUrl}
                                                alt={item.name} style={{width: 40, height: 40}}
                                            />
                                            <Typography>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center" sx={{p: 4}}>
                                        x {item.quantity}        
                                    </TableCell>
                                    <TableCell align="right" sx={{p: 4}}>
                                        x {currencyFormat(item.price)}        
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}