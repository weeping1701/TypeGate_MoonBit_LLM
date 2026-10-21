import type * as MoonBit from "./moonbit.d.ts";

export function json_valid(text: MoonBit.String): MoonBit.Bool;

export function next_chars(text: MoonBit.String): MoonBit.String;

export function classify_json(text: MoonBit.String): MoonBit.Int;

export function regex_check(pattern: MoonBit.String,
                            text: MoonBit.String): MoonBit.Bool;

export function validate_json(schema_json: MoonBit.String,
                              data_json: MoonBit.String): MoonBit.String;
