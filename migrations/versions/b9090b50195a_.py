"""empty message

Revision ID: b9090b50195a
Revises: 0ab71f0ac720
Create Date: 2024-02-14 03:49:45.028596

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b9090b50195a'
down_revision = '0ab71f0ac720'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('peliculas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('titulo', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('descripcion', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('tmdb_id', sa.String(length=120), nullable=False))
        batch_op.drop_constraint('peliculas_email_key', type_='unique')
        batch_op.create_unique_constraint(None, ['titulo'])
        batch_op.create_unique_constraint(None, ['tmdb_id'])
        batch_op.create_unique_constraint(None, ['descripcion'])
        batch_op.drop_column('password')
        batch_op.drop_column('email')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('peliculas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_constraint(None, type_='unique')
        batch_op.create_unique_constraint('peliculas_email_key', ['email'])
        batch_op.drop_column('tmdb_id')
        batch_op.drop_column('descripcion')
        batch_op.drop_column('titulo')

    # ### end Alembic commands ###
