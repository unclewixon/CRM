<?php

namespace App\Imports;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ContactImport implements ToModel, WithValidation, SkipsOnError, SkipsOnFailure
{
    use Importable, SkipsErrors, SkipsFailures;

    public function model(array $row)
    {
        try {
            $dob = $row[5] == '' ? null : Carbon::parse($row[5])->format('Y-m-d');
        } catch (\Exception $e) {
            $dob = null;
        }

        return new Contact([
            'user_id' => auth()->user()->id,
            'firstname' => $row[0],
            'surname' => $row[1],
            'email' => $row[2],
            'phone_number' => $row[4],
            'dob' => $dob,
            'emr_id' => $row[6],
            'address' => $row[7],
            'scheme' => $row[8],
        ]);
    }

    public function rules(): array
    {
        return [];
    }


}
