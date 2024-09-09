export const groupFieldsByIndex = (formData, fields) => {
  const grouped = [];
  Object.keys(formData).forEach((key) => {
    fields.forEach((field) => {
      const match = key.match(new RegExp(`^${field}(\\d+)$`));
      if (match) {
        const index = match[1];
        if (!grouped[index]) {
          grouped[index] = {};
        }
        grouped[index][field] = formData[key];
        delete formData[key];
      }
    });
  });
  return grouped;
};
