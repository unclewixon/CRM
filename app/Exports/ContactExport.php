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
            'sur_name',
            'first_name',
            'email',
            'scheme',
            'gender',
            'dob (year-month-day)'
        ];
    }
}
