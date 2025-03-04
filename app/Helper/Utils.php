<?php

namespace App\Helper;

class Utils{

    public static function toSelect($label): array {
        return [
            'value' => $label,
            'label' => $label,
        ];
    }
}
