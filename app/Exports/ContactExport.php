<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;

class ContactExport implements WithHeadings
{
   /**
     * @return array|string[]
     * headers
     */
    public function headings(): array
    {
        return [
            'surname',
            'firstname',
            'email',
            'scheme',
            'gender',
            'phone_number',
            'dob (year-month-day)'
        ];
    }
}
