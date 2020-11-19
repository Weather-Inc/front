import { Fragment } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import forecastTableStyles from 'assets/styles/forecast-table/forecastTable'
import theme from 'theme'

const createData = (name, value) => {
  return { name, value }
}

const forecastTable = props => {
  const classes = forecastTableStyles(theme)

  const rows = [
    createData('Temperature', props.temperature),
    createData('Wind Speed', props.wind),
    createData('Solar Radiation', props.solar),
    createData('Rainfall', props.rainfall),
    createData('Humidity', props.humidity),
  ]

  return (
    <TableContainer>
      {props.loading
        ? (
          <Fragment>
            <Skeleton variant="text" />
            <Skeleton variant="rect" height={118} />
          </Fragment>
        )
        : <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>
                  Parameter
                </TableCell>

                <TableCell className={classes.head}>
                  Value
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <TableRow className={classes.row} key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      }
    </TableContainer>
  )
}

export default forecastTable
