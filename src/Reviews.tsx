import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useAsync } from 'react-use'

import { getReviews } from './review.service'
import { Review } from './types'

export default function Reviews() {
  const { loading, error, value } = useAsync(async () => {
    return await getReviews()
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        value && (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Comment</TableCell>
                  <TableCell align="left">Creation Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {value.map((review: Review) => (
                  <TableRow key={review.UID}>
                    <TableCell align="left">{review.markDescription}</TableCell>
                    <TableCell align="left">{review.comment}</TableCell>
                    <TableCell align="left">{review.creationDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </div>
  )
}
