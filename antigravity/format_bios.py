import re

# Read the current members.ts
with open('data/members.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract each description block and format it
# Patterns for universities/education
edu_patterns = [
    r'(早稲田大学)',
    r'(慶應義塾大学)',
    r'(京都大学)',
    r'(東京大学)',
    r'(東京工業大学)',
    r'(神戸大学)',
    r'(大阪大学)',
    r'(学習院大学)',
    r'(同志社大学)',
    r'(中央大学)',
    r'(武蔵大学)',
    r'(Durham University)',
    r'(ソルボンヌ大学)',
    r'(グロービス経営大学院)',
]

# Patterns for current positions / titles at end of bio
position_patterns = [
    r'(株式会社Tryfunds\s)',
    r'(株式会社Tryfunds Investment)',
    r'(株式会社Sustech)',
    r'(公益財団法人)',
    r'(Salzburg Global)',
    r'(プライム ライフ テクノロジーズ)',
]

def format_description(desc):
    # First, let's identify the "main body" vs "credentials" section
    # The credentials typically start with the first university mention near the end
    
    # Strategy: find all university/school mentions and position mentions
    # and add \n\n before them when they appear concatenated
    
    result = desc
    
    # Add line break before university names (education section)
    for pat in edu_patterns:
        # Only add break if it's preceded by a non-whitespace char (i.e. concatenated)
        result = re.sub(r'([。）\)a-z])\s*(' + pat[1:-1] + ')', r'\1\n\n\2', result)
    
    # Add line break before company position lines  
    for pat in position_patterns:
        result = re.sub(r'([。）\)了卒])\s*(' + pat[1:-1] + ')', r'\1\n\2', result)
    
    # Specific fixes for common patterns:
    # "卒ソルボンヌ" -> "卒\n\nソルボンヌ"
    result = re.sub(r'卒([^業\n])', r'卒\n\n\1', result)
    # But fix "卒業" back - it should stay together
    # Actually the above regex already handles it with [^業]
    
    # "修了(" -> keep, but "修了株" or "修了公" needs break
    result = re.sub(r'修了([^（\(\n])', r'修了\n\n\1', result)
    # Fix: "修了\n\n（" back to "修了（"
    result = re.sub(r'修了\n\n（', r'修了（\n\n', result)
    
    # "卒業D" -> "卒業\n\nD"  (for Durham etc)
    result = re.sub(r'卒業([A-Z])', r'卒業\n\n\1', result)
    result = re.sub(r'卒業([ぁ-ん])', r'卒業\n\n\1', result)
    
    # Handle MBA pattern: "卒（MBA）" should stay, but after MBA pattern add break
    result = re.sub(r'（MBA）([^`\n])', r'（MBA）\n\n\1', result)
    
    # Clean up any triple+ newlines
    result = re.sub(r'\n{3,}', r'\n\n', result)
    
    return result

# Now process the file
# We need to find each description: `...` block and format it
import re

def process_members_ts(content):
    # Find all description template literals
    def replace_desc(match):
        desc = match.group(1)
        formatted = format_description(desc)
        return f"description: `{formatted}`"
    
    result = re.sub(r"description: `((?:[^`\\]|\\.)*)``", replace_desc, content)
    # Actually let's be more careful with the backtick matching
    
    # Split by member blocks and process each
    lines = content.split('\n')
    output_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if 'description: `' in line:
            # Collect the full description (may span multiple lines)
            desc_start = line.index('`') + 1
            full_desc_line = line[desc_start:]
            
            # Check if closing backtick is on same line
            if '`' in full_desc_line[:-1] or full_desc_line.endswith('`'):
                # Single line description
                desc_content = full_desc_line.rstrip('`')
                prefix = line[:line.index('description:')] + "description: `"
                formatted = format_description(desc_content)
                output_lines.append(prefix + formatted + '`')
            else:
                # Multi-line description
                desc_lines = [full_desc_line]
                i += 1
                while i < len(lines) and not lines[i].strip().endswith('`'):
                    desc_lines.append(lines[i])
                    i += 1
                if i < len(lines):
                    # Last line with closing backtick
                    last = lines[i].rstrip('`').rstrip()
                    desc_lines.append(last)
                
                full_desc = '\n'.join(desc_lines)
                formatted = format_description(full_desc)
                prefix = line[:line.index('description:')] + "description: `"
                output_lines.append(prefix + formatted + '`')
        else:
            output_lines.append(line)
        i += 1
    
    return '\n'.join(output_lines)

result = process_members_ts(content)

with open('data/members.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print("Formatted descriptions with line breaks!")
