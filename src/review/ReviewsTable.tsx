import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Review } from './types'
import styles from './ReviewsTable.module.css'

interface Props {
  reviews: Review[]
  toggleFirst: boolean
}

function rowClassName(toggleFirst: boolean, i: number): string | undefined {
  if ((i + (toggleFirst ? 0 : 1)) % 2 === 0) return styles.highlight
}

export default function ReviewsTable({ reviews, toggleFirst }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={styles.rowHeader}>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Comment</TableCell>
            <TableCell align="left">Creation Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((review: Review, i) => (
            <TableRow className={rowClassName(toggleFirst, i)} key={review.UID}>
              <TableCell align="left">{review.markDescription}</TableCell>
              <TableCell align="left">{review.comment}</TableCell>
              <TableCell align="left">{review.creationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
