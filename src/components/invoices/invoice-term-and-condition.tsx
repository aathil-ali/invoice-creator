import { ChangeEvent, FC } from 'react';

// Base components.
import { Box, EditableText, Typography } from '@/components/base';

// Utilities.
import { createSpacing } from '@/utils/theme';

// Interfaces.
import { useGenerator } from '@/hooks/useGenerator';
import { useInvoice } from '@/hooks';

interface Props {
  terms: string;
}

const InvoiceTermAndConditions: FC<Props> = ({ terms }) => {
  const { editable } = useGenerator();
  const { invoice, setInvoice } = useInvoice();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInvoice({ ...invoice, terms: e.target.value });
  };

  terms = "Make all cheques payable to: Total due within 15 days.   \nOverdue accounts are subject to a service charge of 1% per month."

  return (
    <Box style={{ width: '100%' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'Terms & Conditions'}
      </Typography>
      {editable ? (
        <EditableText
          sx={{ width: '100%' }}
          multiline
          minRows={2}
          maxRows={5}
          name="quantity"
          value={terms}
          onChange={handleChange}
        />
      ) : (
        <Typography variant="subtitle1">{terms}</Typography>
      )}
    </Box>
  );
};

export default InvoiceTermAndConditions;
