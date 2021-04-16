import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Form = ({
  search,
  handleInputChange,
  handleSearchGif
}) => {
  return (
    <form onSubmit={handleSearchGif}>
      <TextField
        label='Search Book'
        name='search'
        value={search}
        onChange={handleInputChange}
      />
      <Button
        variant='outlined'
        color='primary'
        onClick={handleSearchGif}
      >
        Search
      </Button>
    </form>
  )
}

export default Form
