import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { textFieldDarkStyle } from '../../utils/StyleMui';

export default function AutocompleteCard({ values, data, title, handleClickInput, name, error }) {

    return (
        <Autocomplete
            disablePortal
            options={data}
            fullWidth
            value={data.find(p => p.id == values) || null}
            onChange={(event, value) => handleClickInput({ target: { name: name, value: value?.id } })}
            sx={textFieldDarkStyle}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField  {...params} label={title}
                helperText={error[name]}
                error={!!error[name]}
            />}
        />
    );
}
